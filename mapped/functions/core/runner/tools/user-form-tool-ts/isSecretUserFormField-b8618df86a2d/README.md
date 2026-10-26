# `isSecretUserFormField`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726098-726100](../../../../../../../reference/runtime/host-main.cjs#L726098-L726100) | `FunctionDeclaration` | não | `field` |
| [evaluation:560716-560718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560716-L560718) | `FunctionDeclaration` | não | `field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726098-726100](../../../../../../../reference/runtime/host-main.cjs#L726098-L726100) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560716-560718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560716-L560718) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726098

Chamadas escritas diretamente neste corpo: `ALWAYS_SECRET_TYPES.has`.

SHA-256 do trecho: `737ae30b7fd8349076ac2c5cfddcbbe82ab9d58ed61775b8cf743047ae0ef7fb`.

### evaluation:560716

Chamadas escritas diretamente neste corpo: `ALWAYS_SECRET_TYPES.has`.

SHA-256 do trecho: `737ae30b7fd8349076ac2c5cfddcbbe82ab9d58ed61775b8cf743047ae0ef7fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
