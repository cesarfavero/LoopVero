# `wholeNumber`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `shared/auto-review/sand-auto-review-copy-types.ts` · [README do módulo](../../../../../modules/shared/auto-review/sand-auto-review-copy-types-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:694022-694024](../../../../../../reference/runtime/host-main.cjs#L694022-L694024) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694022-694024](../../../../../../reference/runtime/host-main.cjs#L694022-L694024) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:694022

Chamadas escritas diretamente neste corpo: `Number.isInteger`.

SHA-256 do trecho: `8964acc6614e530e9ec60289b875a146c534bebd9b0cec6f0fcea8793669f70a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
