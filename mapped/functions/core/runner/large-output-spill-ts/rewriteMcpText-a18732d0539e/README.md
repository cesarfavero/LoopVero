# `rewriteMcpText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/large-output-spill.ts` · [README do módulo](../../../../../modules/core/runner/large-output-spill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742936-742947](../../../../../../reference/runtime/host-main.cjs#L742936-L742947) | `FunctionDeclaration` | não | `success2, rewrite` |
| [evaluation:515708-515719](../../../../../../reference/runtime/sand-eval-runner.cjs#L515708-L515719) | `FunctionDeclaration` | não | `success2, rewrite` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742936-742947](../../../../../../reference/runtime/host-main.cjs#L742936-L742947) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:515708-515719](../../../../../../reference/runtime/sand-eval-runner.cjs#L515708-L515719) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:742936

Chamadas escritas diretamente neste corpo: `rewrite`, `success2.clone`.

Alvos de atribuição ou incremento: `changed`, `item.content.value.text`.

SHA-256 do trecho: `a0d070580bdb02d9cd7e0f449654ab5902a03b8c964c8589df98756937fadbd3`.

### evaluation:515708

Chamadas escritas diretamente neste corpo: `rewrite`, `success2.clone`.

Alvos de atribuição ou incremento: `changed`, `item.content.value.text`.

SHA-256 do trecho: `a0d070580bdb02d9cd7e0f449654ab5902a03b8c964c8589df98756937fadbd3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
