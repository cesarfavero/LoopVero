# `clearFilledSecretsInPage/clearMatching`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-clear.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-clear-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543230-543239](../../../../../../../reference/runtime/host-main.cjs#L543230-L543239) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543230-543239](../../../../../../../reference/runtime/host-main.cjs#L543230-L543239) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:543230

Chamadas escritas diretamente neste corpo: `input2.dispatchEvent`, `nativeValueSetter.call`, `new Event`, `new InputEvent`, `secretInputs`.

SHA-256 do trecho: `46a66167fc23b890b1fa210b07d74989b013415d2b47b07600fbbefd651ef593`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
