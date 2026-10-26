# `buildSandSidebarDeepLinkUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/deep-link.ts` · [README do módulo](../../../../../modules/shared/desktop/deep-link-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:475605-475612](../../../../../../reference/runtime/sand-eval-runner.cjs#L475605-L475612) | `FunctionDeclaration` | não | `target, automationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475605-475612](../../../../../../reference/runtime/sand-eval-runner.cjs#L475605-L475612) | 1 | 0 | 0 | 2 | 1 | 1 |

### evaluation:475605

Chamadas escritas diretamente neste corpo: `sandDeepLinks.buildUrl`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `45a4637e2578bb40420cca83e67aa920eebed9db9f6d278d9ea0a56b19c3251a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
