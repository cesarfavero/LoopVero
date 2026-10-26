# `nextLogShipDelayMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/log-ship-cadence.ts` · [README do módulo](../../../../../modules/shared/observability/log-ship-cadence-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:452654-452666](../../../../../../reference/runtime/host-main.cjs#L452654-L452666) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452654-452666](../../../../../../reference/runtime/host-main.cjs#L452654-L452666) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:452654

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.round`, `backoff2`, `random`.

Alvos de atribuição ou incremento: `baseMs`.

SHA-256 do trecho: `c7441ddb606b1dacb8b450948ee108adb326e0725997f953124538ee6197d06b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
