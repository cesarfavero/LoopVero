# `parseHttpUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/credential-domain.ts` · [README do módulo](../../../../../modules/core/runner/credential-domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546779-546788](../../../../../../reference/runtime/host-main.cjs#L546779-L546788) | `FunctionDeclaration` | não | `raw` |
| [evaluation:481968-481977](../../../../../../reference/runtime/sand-eval-runner.cjs#L481968-L481977) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546779-546788](../../../../../../reference/runtime/host-main.cjs#L546779-L546788) | 3 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:481968-481977](../../../../../../reference/runtime/sand-eval-runner.cjs#L481968-L481977) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:546779

Chamadas escritas diretamente neste corpo: `new URL`, `raw.trim`, `value.includes`.

SHA-256 do trecho: `0a4ca692528eaa54872e0b32bf52a7a5db3df1daae5c44fa5e2603202fdbde6f`.

### evaluation:481968

Chamadas escritas diretamente neste corpo: `new URL`, `raw.trim`, `value.includes`.

SHA-256 do trecho: `0a4ca692528eaa54872e0b32bf52a7a5db3df1daae5c44fa5e2603202fdbde6f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
