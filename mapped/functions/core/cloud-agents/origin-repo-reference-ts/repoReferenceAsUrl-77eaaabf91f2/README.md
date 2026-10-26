# `repoReferenceAsUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-repo-reference.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509098-509109](../../../../../../reference/runtime/host-main.cjs#L509098-L509109) | `FunctionDeclaration` | não | `raw` |
| [evaluation:556851-556862](../../../../../../reference/runtime/sand-eval-runner.cjs#L556851-L556862) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509098-509109](../../../../../../reference/runtime/host-main.cjs#L509098-L509109) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:556851-556862](../../../../../../reference/runtime/sand-eval-runner.cjs#L556851-L556862) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:509098

Chamadas escritas diretamente neste corpo: `/^[a-z][a-z0-9+.-]*:\/\//i.test`, `new URL`, `raw.trim`, `trimmed.replace`.

SHA-256 do trecho: `41c279f645cee2a47d8823f4af026849b0e8566531893e08293c610caf4f90ce`.

### evaluation:556851

Chamadas escritas diretamente neste corpo: `/^[a-z][a-z0-9+.-]*:\/\//i.test`, `new URL`, `raw.trim`, `trimmed.replace`.

SHA-256 do trecho: `41c279f645cee2a47d8823f4af026849b0e8566531893e08293c610caf4f90ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
