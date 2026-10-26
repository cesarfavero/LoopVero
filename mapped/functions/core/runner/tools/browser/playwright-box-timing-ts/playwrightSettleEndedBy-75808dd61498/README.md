# `playwrightSettleEndedBy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-box-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743204-743218](../../../../../../../../reference/runtime/host-main.cjs#L743204-L743218) | `FunctionDeclaration` | não | `timing` |
| [evaluation:516055-516069](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516055-L516069) | `FunctionDeclaration` | não | `timing` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743204-743218](../../../../../../../../reference/runtime/host-main.cjs#L743204-L743218) | 8 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:516055-516069](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516055-L516069) | 8 | 1 | 0 | 5 | 0 | 0 |

### host:743204

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `holdMs`, `probeMs`.

SHA-256 do trecho: `e51c229b8f4d7a0e579f9d592a73604fd487cda2eab71bfd109aa2658c56762a`.

### evaluation:516055

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `holdMs`, `probeMs`.

SHA-256 do trecho: `e51c229b8f4d7a0e579f9d592a73604fd487cda2eab71bfd109aa2658c56762a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
