# `bindCallerAbort`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/run-abort-reason.ts` · [README do módulo](../../../../../modules/core/runner/run-abort-reason-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554086-554091](../../../../../../reference/runtime/sand-eval-runner.cjs#L554086-L554091) | `FunctionDeclaration` | não | `signal, abort` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554086-554091](../../../../../../reference/runtime/sand-eval-runner.cjs#L554086-L554091) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554086

Chamadas escritas diretamente neste corpo: `onAbort`, `signal.addEventListener`.

SHA-256 do trecho: `29389a41bfccd0b661c376454755bdec623c99f3c9ad60b6a5613c12f0743392`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
