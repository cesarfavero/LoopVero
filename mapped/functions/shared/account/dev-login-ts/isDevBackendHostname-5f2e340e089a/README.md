# `isDevBackendHostname`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/account/dev-login.ts` · [README do módulo](../../../../../modules/shared/account/dev-login-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175703-175705](../../../../../../reference/runtime/host-main.cjs#L175703-L175705) | `FunctionDeclaration` | não | `hostname4` |
| [evaluation:511679-511681](../../../../../../reference/runtime/sand-eval-runner.cjs#L511679-L511681) | `FunctionDeclaration` | não | `hostname3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175703-175705](../../../../../../reference/runtime/host-main.cjs#L175703-L175705) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511679-511681](../../../../../../reference/runtime/sand-eval-runner.cjs#L511679-L511681) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175703

Chamadas escritas diretamente neste corpo: `hostname4.endsWith`, `isLoopbackHostname`.

SHA-256 do trecho: `a5566d7f53a284bd73a772ab69123ab18e0e7449b17798556ceacf04ac5f7a20`.

### evaluation:511679

Chamadas escritas diretamente neste corpo: `hostname3.endsWith`, `isLoopbackHostname2`.

SHA-256 do trecho: `7a3418e6219664f1f9daaa414c919f5bae7555a82dc8bde5a13b795a381c54bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
