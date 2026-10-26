# `normalizeSendEmailArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-email-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764276-764322](../../../../../../../reference/runtime/host-main.cjs#L764276-L764322) | `FunctionDeclaration` | não | `args` |
| [evaluation:557644-557690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557644-L557690) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764276-764322](../../../../../../../reference/runtime/host-main.cjs#L764276-L764322) | 6 | 0 | 0 | 1 | 4 | 0 |
| [evaluation:557644-557690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557644-L557690) | 6 | 0 | 0 | 1 | 4 | 0 |

### host:764276

Chamadas escritas diretamente neste corpo: `.map`, `args.body.trim`, `args.from.toLowerCase`, `args.html_body.trim`, `new SandToolInputError`, `new Set`, `nonEmptyList`, `normalizeDisplayName`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `a0167dcf84e36888dfdd4ab79343b213e3f3d9defbf633d672b6d6eca2101f1a`.

### evaluation:557644

Chamadas escritas diretamente neste corpo: `.map`, `args.body.trim`, `args.from.toLowerCase`, `args.html_body.trim`, `new SandToolInputError`, `new Set`, `nonEmptyList`, `normalizeDisplayName`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `a0167dcf84e36888dfdd4ab79343b213e3f3d9defbf633d672b6d6eca2101f1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
