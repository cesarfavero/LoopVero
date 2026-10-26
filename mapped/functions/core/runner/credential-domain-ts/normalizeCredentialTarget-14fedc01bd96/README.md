# `normalizeCredentialTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/credential-domain.ts` · [README do módulo](../../../../../modules/core/runner/credential-domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546802-546805](../../../../../../reference/runtime/host-main.cjs#L546802-L546805) | `FunctionDeclaration` | não | `rawTarget` |
| [evaluation:481991-481994](../../../../../../reference/runtime/sand-eval-runner.cjs#L481991-L481994) | `FunctionDeclaration` | não | `rawTarget` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546802-546805](../../../../../../reference/runtime/host-main.cjs#L546802-L546805) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481991-481994](../../../../../../reference/runtime/sand-eval-runner.cjs#L481991-L481994) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:546802

Chamadas escritas diretamente neste corpo: `isSecureCredentialTarget`, `parseHttpUrl`.

SHA-256 do trecho: `5ee6c2b54b9988a09da568f7d225e0b4574eecb77c9a8d968b0abf6946b1eacd`.

### evaluation:481991

Chamadas escritas diretamente neste corpo: `isSecureCredentialTarget`, `parseHttpUrl`.

SHA-256 do trecho: `5ee6c2b54b9988a09da568f7d225e0b4574eecb77c9a8d968b0abf6946b1eacd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
