# `sandErrorTags`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/registry.ts` · [README do módulo](../../../../../modules/shared/errors/registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:452619-452642](../../../../../../reference/runtime/host-main.cjs#L452619-L452642) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452619-452642](../../../../../../reference/runtime/host-main.cjs#L452619-L452642) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:452619

Chamadas escritas diretamente neste corpo: `BOUNDED_TAG_VALUE.test`, `Number.isFinite`, `Object.entries`, `String`, `declared.has`, `new Set`, `put`, `sandErrorWireCode`, `tagName`.

SHA-256 do trecho: `74eb842fe33d67ea4b9497c5631716f9de35eaa6f4aa2f4deded04649b4c20bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
