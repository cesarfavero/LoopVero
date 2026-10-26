# `rejectingUnsupportedAttachmentFields`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741789-741803](../../../../../../../reference/runtime/host-main.cjs#L741789-L741803) | `FunctionDeclaration` | não | `schema3` |
| [evaluation:482736-482750](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482736-L482750) | `FunctionDeclaration` | não | `schema3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741789-741803](../../../../../../../reference/runtime/host-main.cjs#L741789-L741803) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482736-482750](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482736-L482750) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741789

Chamadas escritas diretamente neste corpo: `external_exports2.preprocess`.

SHA-256 do trecho: `ec2c1b214addb23b058515c1d000050854f13e8e585878f4573e48d89792c5a9`.

### evaluation:482736

Chamadas escritas diretamente neste corpo: `external_exports3.preprocess`.

SHA-256 do trecho: `baa164adcd1c6f66a888457c2370c0abad3739114ade53716d5a5d6236d6a30e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
