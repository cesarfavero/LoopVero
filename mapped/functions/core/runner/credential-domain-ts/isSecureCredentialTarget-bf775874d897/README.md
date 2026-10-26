# `isSecureCredentialTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/credential-domain.ts` · [README do módulo](../../../../../modules/core/runner/credential-domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546797-546801](../../../../../../reference/runtime/host-main.cjs#L546797-L546801) | `FunctionDeclaration` | não | `rawTarget` |
| [evaluation:481986-481990](../../../../../../reference/runtime/sand-eval-runner.cjs#L481986-L481990) | `FunctionDeclaration` | não | `rawTarget` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546797-546801](../../../../../../reference/runtime/host-main.cjs#L546797-L546801) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481986-481990](../../../../../../reference/runtime/sand-eval-runner.cjs#L481986-L481990) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:546797

Chamadas escritas diretamente neste corpo: `isLoopbackHostname2`, `normalizedHostname2`, `parseHttpUrl`.

SHA-256 do trecho: `c347e040554d21dbac4213e46ac41101a5f88d6aae05072f06d37901578e2500`.

### evaluation:481986

Chamadas escritas diretamente neste corpo: `isLoopbackHostname`, `normalizedHostname`, `parseHttpUrl`.

SHA-256 do trecho: `6038389ad33e6d215af30373d68405fd746f6aa5fcdbb38a96cb26dd13eab63b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
