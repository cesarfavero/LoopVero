# `isBoundedListener`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/repo-wide-listener-refusal.ts` · [README do módulo](../../../../../modules/core/automations/repo-wide-listener-refusal-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762008-762011](../../../../../../reference/runtime/host-main.cjs#L762008-L762011) | `FunctionDeclaration` | não | `listener` |
| [evaluation:554586-554589](../../../../../../reference/runtime/sand-eval-runner.cjs#L554586-L554589) | `FunctionDeclaration` | não | `listener` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762008-762011](../../../../../../reference/runtime/host-main.cjs#L762008-L762011) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554586-554589](../../../../../../reference/runtime/sand-eval-runner.cjs#L554586-L554589) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:762008

Chamadas escritas diretamente neste corpo: `.some`.

SHA-256 do trecho: `520114e96e0b3aa22e2b76ed449e9340c6f6c617324d47121aaf0dcdcd3496cd`.

### evaluation:554586

Chamadas escritas diretamente neste corpo: `.some`.

SHA-256 do trecho: `520114e96e0b3aa22e2b76ed449e9340c6f6c617324d47121aaf0dcdcd3496cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
