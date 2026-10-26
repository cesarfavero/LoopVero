# `normalizedHostname`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/credential-domain.ts` · [README do módulo](../../../../../modules/core/runner/credential-domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:481978-481980](../../../../../../reference/runtime/sand-eval-runner.cjs#L481978-L481980) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:481978-481980](../../../../../../reference/runtime/sand-eval-runner.cjs#L481978-L481980) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:481978

Chamadas escritas diretamente neste corpo: `.replace`, `url2.hostname.toLowerCase`.

SHA-256 do trecho: `81e66771e159eb44e45c73424dc7ce0d3240bb8198560ef797ebed214888a246`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
