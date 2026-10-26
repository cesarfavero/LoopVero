# `walk2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749707-749714](../../../../../../../../reference/runtime/host-main.cjs#L749707-L749714) | `FunctionDeclaration` | não | `fn, allowNavigation` |
| [evaluation:522558-522565](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522558-L522565) | `FunctionDeclaration` | não | `fn, allowNavigation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749707-749714](../../../../../../../../reference/runtime/host-main.cjs#L749707-L749714) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:522558-522565](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522558-L522565) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:749707

Chamadas escritas diretamente neste corpo: `.entry`, `new Walker`.

SHA-256 do trecho: `0646d2b514ae94d4eb30995fe0e4bc46683f2b9e7d2fa6738152849274e02838`.

### evaluation:522558

Chamadas escritas diretamente neste corpo: `.entry`, `new Walker`.

SHA-256 do trecho: `d0ad6ceef2128dcf4c2c4f6c8eac05e310ceaa4185249557a90644fc934dc252`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
