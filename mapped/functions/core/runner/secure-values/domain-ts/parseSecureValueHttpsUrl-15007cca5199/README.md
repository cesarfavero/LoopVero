# `parseSecureValueHttpsUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/domain.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758056-758058](../../../../../../../reference/runtime/host-main.cjs#L758056-L758058) | `FunctionDeclaration` | não | `raw` |
| [evaluation:546247-546249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546247-L546249) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758056-758058](../../../../../../../reference/runtime/host-main.cjs#L758056-L758058) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546247-546249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546247-L546249) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:758056

Chamadas escritas diretamente neste corpo: `URL.parse`, `parseSecureValueHttpsSite`.

SHA-256 do trecho: `f26434f93beb954875c2157da080bb72f47fdccf40df438329d3d6d6dfd171bd`.

### evaluation:546247

Chamadas escritas diretamente neste corpo: `URL.parse`, `parseSecureValueHttpsSite`.

SHA-256 do trecho: `f26434f93beb954875c2157da080bb72f47fdccf40df438329d3d6d6dfd171bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
