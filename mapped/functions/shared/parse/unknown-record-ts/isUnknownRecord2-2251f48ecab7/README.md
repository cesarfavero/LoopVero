# `isUnknownRecord2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/parse/unknown-record.ts` · [README do módulo](../../../../../modules/shared/parse/unknown-record-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:155289-155291](../../../../../../reference/runtime/host-main.cjs#L155289-L155291) | `FunctionDeclaration` | não | `value` |
| [evaluation:479644-479646](../../../../../../reference/runtime/sand-eval-runner.cjs#L479644-L479646) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155289-155291](../../../../../../reference/runtime/host-main.cjs#L155289-L155291) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479644-479646](../../../../../../reference/runtime/sand-eval-runner.cjs#L479644-L479646) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:155289

Chamadas escritas diretamente neste corpo: `Array.isArray`.

SHA-256 do trecho: `04252220b0a748f171ef24fb1fb72ecbda743a7961e491d20dc8775f5d2b3025`.

### evaluation:479644

Chamadas escritas diretamente neste corpo: `Array.isArray`.

SHA-256 do trecho: `04252220b0a748f171ef24fb1fb72ecbda743a7961e491d20dc8775f5d2b3025`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
