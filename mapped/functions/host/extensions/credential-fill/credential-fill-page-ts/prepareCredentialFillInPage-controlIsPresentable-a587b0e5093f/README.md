# `prepareCredentialFillInPage/controlIsPresentable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-page.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-page-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543343-543349](../../../../../../../reference/runtime/host-main.cjs#L543343-L543349) | `ArrowFunctionExpression` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543343-543349](../../../../../../../reference/runtime/host-main.cjs#L543343-L543349) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:543343

Chamadas escritas diretamente neste corpo: `Element.prototype.matches.call`, `Number.isFinite`, `elementAndAncestorsAreVisible`, `input2.getAttribute`, `input2.getBoundingClientRect`.

SHA-256 do trecho: `aac02c4339e8783fdf0764bb4b42f195e9ec78cab96fd5ec139faa23c499b317`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
