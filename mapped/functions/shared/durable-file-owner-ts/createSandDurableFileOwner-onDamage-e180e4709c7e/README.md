# `createSandDurableFileOwner/onDamage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/durable-file-owner.ts` · [README do módulo](../../../../modules/shared/durable-file-owner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453447-453456](../../../../../reference/runtime/host-main.cjs#L453447-L453456) | `ArrowFunctionExpression` | não | `{ path: path33, cause, copyPath }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453447-453456](../../../../../reference/runtime/host-main.cjs#L453447-L453456) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:453447

Chamadas escritas diretamente neste corpo: `errorLogTag`, `fileName`, `once2`.

SHA-256 do trecho: `0186b3ac36a1b7267eb4afed7bc75051a070246232da23544b0ecd8c9238c149`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
