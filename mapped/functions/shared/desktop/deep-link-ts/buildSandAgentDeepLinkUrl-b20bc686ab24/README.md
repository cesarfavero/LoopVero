# `buildSandAgentDeepLinkUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/deep-link.ts` · [README do módulo](../../../../../modules/shared/desktop/deep-link-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489453-489460](../../../../../../reference/runtime/host-main.cjs#L489453-L489460) | `FunctionDeclaration` | não | `agentId` |
| [evaluation:475589-475596](../../../../../../reference/runtime/sand-eval-runner.cjs#L475589-L475596) | `FunctionDeclaration` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489453-489460](../../../../../../reference/runtime/host-main.cjs#L489453-L489460) | 1 | 0 | 0 | 2 | 1 | 1 |
| [evaluation:475589-475596](../../../../../../reference/runtime/sand-eval-runner.cjs#L475589-L475596) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:489453

Chamadas escritas diretamente neste corpo: `sandDeepLinks.buildUrl`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `17cc50a8b8576ff6689d58d8790e5f88216aaada1da7ac7383925c574cd139c6`.

### evaluation:475589

Chamadas escritas diretamente neste corpo: `sandDeepLinks.buildUrl`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `0bdb3175429a6eb0a8edaf7dba61cc39e37a53d06d33e3319920846cd61602a1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
