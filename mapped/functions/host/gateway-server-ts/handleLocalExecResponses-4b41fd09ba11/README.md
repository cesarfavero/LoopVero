# `handleLocalExecResponses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493766-493774](../../../../../reference/runtime/host-main.cjs#L493766-L493774) | `FunctionDeclaration` | não | `deps, body, res` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493766-493774](../../../../../reference/runtime/host-main.cjs#L493766-L493774) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:493766

Chamadas escritas diretamente neste corpo: `bridge.submitResponses`, `parseArgs`, `respondError`, `respondJson`.

SHA-256 do trecho: `d44137a3b00db4134c131d75be1e737df954c9f2439ff57dc4d7e907c5bea6c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
