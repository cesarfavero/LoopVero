# `formatEmailTimestamp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-tool-format.ts` · [README do módulo](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764148-764151](../../../../../../../reference/runtime/host-main.cjs#L764148-L764151) | `FunctionDeclaration` | não | `ms2` |
| [evaluation:557519-557522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557519-L557522) | `FunctionDeclaration` | não | `ms2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764148-764151](../../../../../../../reference/runtime/host-main.cjs#L764148-L764151) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557519-557522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557519-L557522) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:764148

Chamadas escritas diretamente neste corpo: `.replace`, `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 do trecho: `0d63f5dd0b5c5466c06d5095bb102a94b5c7b3c277005e8384b073f0267732f5`.

### evaluation:557519

Chamadas escritas diretamente neste corpo: `.replace`, `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 do trecho: `0d63f5dd0b5c5466c06d5095bb102a94b5c7b3c277005e8384b073f0267732f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
