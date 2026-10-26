# `linkItemHref`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/link-items/link-items.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741085-741087](../../../../../../../../reference/runtime/host-main.cjs#L741085-L741087) | `FunctionDeclaration` | não | `url2` |
| [evaluation:482032-482034](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482032-L482034) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741085-741087](../../../../../../../../reference/runtime/host-main.cjs#L741085-L741087) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482032-482034](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482032-L482034) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741085

Chamadas escritas diretamente neste corpo: `.href.replace`, `.replace`, `new URL`.

SHA-256 do trecho: `6928b27c22db2abd5d0abddb4e455f5987617efd4e575f61ecaabffd04502289`.

### evaluation:482032

Chamadas escritas diretamente neste corpo: `.href.replace`, `.replace`, `new URL`.

SHA-256 do trecho: `6928b27c22db2abd5d0abddb4e455f5987617efd4e575f61ecaabffd04502289`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
