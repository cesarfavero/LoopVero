# `bareEmailAddress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732686-732691](../../../../../../../reference/runtime/host-main.cjs#L732686-L732691) | `FunctionDeclaration` | não | `sender` |
| [evaluation:540208-540213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540208-L540213) | `FunctionDeclaration` | não | `sender` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732686-732691](../../../../../../../reference/runtime/host-main.cjs#L732686-L732691) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540208-540213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540208-L540213) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:732686

Chamadas escritas diretamente neste corpo: `/<([^\s<>]+@[^\s<>]+)>/.exec`, `/^[^\s@<>]+@[^\s@<>]+$/.test`, `sender.trim`.

SHA-256 do trecho: `847d49ed136fd5322731dc86098062d22b743d0f9b06bcf1f5cefd68e11e6659`.

### evaluation:540208

Chamadas escritas diretamente neste corpo: `/<([^\s<>]+@[^\s<>]+)>/.exec`, `/^[^\s@<>]+@[^\s@<>]+$/.test`, `sender.trim`.

SHA-256 do trecho: `847d49ed136fd5322731dc86098062d22b743d0f9b06bcf1f5cefd68e11e6659`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
