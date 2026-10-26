# `readBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493375-493387](../../../../../reference/runtime/host-main.cjs#L493375-L493387) | `FunctionDeclaration` | sim | `req` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493375-493387](../../../../../reference/runtime/host-main.cjs#L493375-L493387) | 2 | 1 | 0 | 1 | 1 | 0 |

### host:493375

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.concat`, `Buffer.from`, `chunks.push`, `new SandGatewayRequestError`.

Alvos de atribuição ou incremento: `totalBytes`.

Alvos de lançamento explícito: `SandGatewayRequestError`.

SHA-256 do trecho: `f75e3375fbf6b7836720717d3274f5174e43a314ed31178134259cd950306f9c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
