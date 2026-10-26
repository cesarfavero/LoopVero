# `unescapeName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/user-form-playwright-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767393-767400](../../../../../../../../reference/runtime/host-main.cjs#L767393-L767400) | `FunctionDeclaration` | não | `raw` |
| [evaluation:562910-562917](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562910-L562917) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767393-767400](../../../../../../../../reference/runtime/host-main.cjs#L767393-L767400) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:562910-562917](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562910-L562917) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:767393

Chamadas escritas diretamente neste corpo: `JSON.parse`.

SHA-256 do trecho: `4363fe31a8092149895f89869ae4207abb11416090307498de4585bd623b15e4`.

### evaluation:562910

Chamadas escritas diretamente neste corpo: `JSON.parse`.

SHA-256 do trecho: `5df5169b76edfbf22893ca6ad79e03f454a752afce3006539597a0087030681a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
