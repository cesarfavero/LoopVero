# `toolResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781787-781791](../../../../../../../../reference/runtime/host-main.cjs#L781787-L781791) | `FunctionDeclaration` | não | `content, isError` |
| [evaluation:582132-582136](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582132-L582136) | `FunctionDeclaration` | não | `content, isError` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781787-781791](../../../../../../../../reference/runtime/host-main.cjs#L781787-L781791) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582132-582136](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582132-L582136) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781787

Chamadas escritas diretamente neste corpo: `new McpResult`, `new McpSuccess`.

SHA-256 do trecho: `8bca77b1f38a934c80d604cd3bbb1d14ea8474f13cb86b4104689f731b846e60`.

### evaluation:582132

Chamadas escritas diretamente neste corpo: `new McpResult`, `new McpSuccess`.

SHA-256 do trecho: `8bca77b1f38a934c80d604cd3bbb1d14ea8474f13cb86b4104689f731b846e60`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
