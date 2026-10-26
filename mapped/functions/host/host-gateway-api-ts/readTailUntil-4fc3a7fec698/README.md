# `readTailUntil`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491849-491865](../../../../../reference/runtime/host-main.cjs#L491849-L491865) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491849-491865](../../../../../reference/runtime/host-main.cjs#L491849-L491865) | 3 | 1 | 1 | 1 | 0 | 0 |

### host:491849

Chamadas escritas diretamente neste corpo: `args.isSatisfied`, `args.read`, `collected.unshift`.

Alvos de atribuição ou incremento: `cursor`, `nextBeforeSeq`, `pageIndex`.

SHA-256 do trecho: `45103423f9e389a327ef4e32d7da8a755a3b4e06b3a8fa0cf48e394a6a6b5c9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
