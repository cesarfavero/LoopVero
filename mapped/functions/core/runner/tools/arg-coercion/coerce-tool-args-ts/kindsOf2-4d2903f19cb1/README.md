# `kindsOf2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724863-724881](../../../../../../../../reference/runtime/host-main.cjs#L724863-L724881) | `FunctionDeclaration` | não | `schema3` |
| [evaluation:479826-479844](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479826-L479844) | `FunctionDeclaration` | não | `schema3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724863-724881](../../../../../../../../reference/runtime/host-main.cjs#L724863-L724881) | 9 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:479826-479844](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479826-L479844) | 9 | 0 | 0 | 9 | 0 | 0 |

### host:724863

Chamadas escritas diretamente neste corpo: `isPreprocess`, `kindsOf2`, `literalKind`, `new Set`, `options2.flatMap`, `unwrap`.

SHA-256 do trecho: `f3964cd90be25fbfae807a7d487105495e34ddba980d3dd80a7c849d10294d6a`.

### evaluation:479826

Chamadas escritas diretamente neste corpo: `isPreprocess`, `kindsOf2`, `literalKind`, `new Set`, `options2.flatMap`, `unwrap`.

SHA-256 do trecho: `28d69fff80575fa1bae1db6f2b9d6f06b1df6b3fe746f2fec109f4bc595b3ea0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
