# `buildSandBotTemplateDeepLinkUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/deep-link.ts` · [README do módulo](../../../../../modules/shared/desktop/deep-link-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489450-489452](../../../../../../reference/runtime/host-main.cjs#L489450-L489452) | `FunctionDeclaration` | não | `shareId` |
| [evaluation:475586-475588](../../../../../../reference/runtime/sand-eval-runner.cjs#L475586-L475588) | `FunctionDeclaration` | não | `shareId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489450-489452](../../../../../../reference/runtime/host-main.cjs#L489450-L489452) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475586-475588](../../../../../../reference/runtime/sand-eval-runner.cjs#L475586-L475588) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:489450

Chamadas escritas diretamente neste corpo: `sandDeepLinks.buildUrl`.

SHA-256 do trecho: `ebe5e1973a1a9c103334e540030402d5b299b294108113bac32c7000e04ba789`.

### evaluation:475586

Chamadas escritas diretamente neste corpo: `sandDeepLinks.buildUrl`.

SHA-256 do trecho: `ebe5e1973a1a9c103334e540030402d5b299b294108113bac32c7000e04ba789`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
