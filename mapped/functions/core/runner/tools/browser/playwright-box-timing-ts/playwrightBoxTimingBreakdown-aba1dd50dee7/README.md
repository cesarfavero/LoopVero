# `playwrightBoxTimingBreakdown`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-box-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743139-743163](../../../../../../../../reference/runtime/host-main.cjs#L743139-L743163) | `FunctionDeclaration` | não | `timing, { sentAtMs, returnedAtMs }` |
| [evaluation:515990-516014](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515990-L516014) | `FunctionDeclaration` | não | `timing, { sentAtMs, returnedAtMs }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743139-743163](../../../../../../../../reference/runtime/host-main.cjs#L743139-L743163) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:515990-516014](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515990-L516014) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:743139

Chamadas escritas diretamente neste corpo: `Math.max`.

Alvos de atribuição ou incremento: `stepMs.serialize`, `stepMs.settle`, `stepMs[computed]`.

SHA-256 do trecho: `35ff35a814fa0cb49ad9bcd35cdaabb2d839390a1c2cc64d2cae4ef7eab1171d`.

### evaluation:515990

Chamadas escritas diretamente neste corpo: `Math.max`.

Alvos de atribuição ou incremento: `stepMs.serialize`, `stepMs.settle`, `stepMs[computed]`.

SHA-256 do trecho: `35ff35a814fa0cb49ad9bcd35cdaabb2d839390a1c2cc64d2cae4ef7eab1171d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
