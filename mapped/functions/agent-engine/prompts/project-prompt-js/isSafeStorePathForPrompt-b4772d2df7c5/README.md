# `isSafeStorePathForPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640991-640993](../../../../../../reference/runtime/host-main.cjs#L640991-L640993) | `FunctionDeclaration` | não | `path33` |
| [evaluation:431604-431606](../../../../../../reference/runtime/sand-eval-runner.cjs#L431604-L431606) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640991-640993](../../../../../../reference/runtime/host-main.cjs#L640991-L640993) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431604-431606](../../../../../../reference/runtime/sand-eval-runner.cjs#L431604-L431606) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640991

Chamadas escritas diretamente neste corpo: `/[<>'\p{Cc}]/u.test`.

SHA-256 do trecho: `7b641f4baf22210a4ddea130e5e1160aaa69ec9af898e9e520650d37e4a8376b`.

### evaluation:431604

Chamadas escritas diretamente neste corpo: `/[<>'\p{Cc}]/u.test`.

SHA-256 do trecho: `7b641f4baf22210a4ddea130e5e1160aaa69ec9af898e9e520650d37e4a8376b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
