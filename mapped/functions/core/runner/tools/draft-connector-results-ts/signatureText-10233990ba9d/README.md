# `signatureText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732855-732857](../../../../../../../reference/runtime/host-main.cjs#L732855-L732857) | `FunctionDeclaration` | não | `html` |
| [evaluation:540377-540379](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540377-L540379) | `FunctionDeclaration` | não | `html` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732855-732857](../../../../../../../reference/runtime/host-main.cjs#L732855-L732857) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540377-540379](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540377-L540379) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732855

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `.replace`, `.split`, `html.replace`.

SHA-256 do trecho: `116d8eec8cbda8961fa558998a387e1c724bbf2693d4a9cbd1d682598b422567`.

### evaluation:540377

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `.replace`, `.split`, `html.replace`.

SHA-256 do trecho: `116d8eec8cbda8961fa558998a387e1c724bbf2693d4a9cbd1d682598b422567`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
