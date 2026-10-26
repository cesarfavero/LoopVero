# `isValidGithubRepo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485464-485466](../../../../../../reference/runtime/host-main.cjs#L485464-L485466) | `FunctionDeclaration` | não | `repo` |
| [evaluation:475196-475198](../../../../../../reference/runtime/sand-eval-runner.cjs#L475196-L475198) | `FunctionDeclaration` | não | `repo` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485464-485466](../../../../../../reference/runtime/host-main.cjs#L485464-L485466) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475196-475198](../../../../../../reference/runtime/sand-eval-runner.cjs#L475196-L475198) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485464

Chamadas escritas diretamente neste corpo: `GITHUB_REPO_PATTERN.test`.

SHA-256 do trecho: `08a14b868495f324c0dc7ef1fe2e90cbcf4faccefd6fc920f7978da9b5b3d936`.

### evaluation:475196

Chamadas escritas diretamente neste corpo: `GITHUB_REPO_PATTERN.test`.

SHA-256 do trecho: `08a14b868495f324c0dc7ef1fe2e90cbcf4faccefd6fc920f7978da9b5b3d936`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
