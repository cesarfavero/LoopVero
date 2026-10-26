# `bodyWords`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732498-732505](../../../../../../../reference/runtime/host-main.cjs#L732498-L732505) | `FunctionDeclaration` | não | `body` |
| [evaluation:539510-539517](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539510-L539517) | `FunctionDeclaration` | não | `body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732498-732505](../../../../../../../reference/runtime/host-main.cjs#L732498-L732505) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539510-539517](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539510-L539517) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732498

Chamadas escritas diretamente neste corpo: `.flatMap`, `body.split`.

SHA-256 do trecho: `3de5b81da1423d913e63bf96d08305395a451eea4e2ee4acd8d37ae1c04c0550`.

### evaluation:539510

Chamadas escritas diretamente neste corpo: `.flatMap`, `body.split`.

SHA-256 do trecho: `b589c52ea66bcfb6a9aaff106d10787a30f12826c2c6508f78d523e380fa3c51`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
